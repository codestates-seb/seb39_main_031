package com.codestates.main31.user.auth.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.codestates.main31.user.auth.filter.entity.PrincipalDetails;
import com.codestates.main31.user.config.security.JwtConfig;
import com.codestates.main31.user.entity.User;
import com.codestates.main31.user.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private UserRepository userRepository;

    private JwtConfig jwtConfig;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, UserRepository userRepository, JwtConfig jwtConfig) {
        super(authenticationManager);
        this.userRepository = userRepository;
        this.jwtConfig = jwtConfig;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {

        String jwtHeader = request.getHeader(jwtConfig.getHeader());
        if(jwtHeader == null || !jwtHeader.startsWith(jwtConfig.getPrefix())) {
            chain.doFilter(request, response);
            return;
        }
        String jwtToken = jwtHeader.replace(jwtConfig.getPrefix(), "");

        String email = JWT.require(Algorithm.HMAC512(jwtConfig.getSecret())).build().verify(jwtToken).getClaim("email").asString();

        if (email != null) {
            User userEntity = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException());

            PrincipalDetails principalDetails = PrincipalDetails.create(userEntity);
            Authentication authentication = new UsernamePasswordAuthenticationToken(principalDetails, null, principalDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);

            chain.doFilter(request, response);
        }
        super.doFilterInternal(request, response, chain);
    }
}