package com.codestates.main31.address;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/address")
public class AddressController {
    private AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }


    @GetMapping("/reg/{region}")
    public ResponseEntity getAddressFromRegion(@PathVariable String region) {
        System.out.println("지역 ::::::: " + region);
        List<Address> result = addressService.findTownListFromRegion(region);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }
    @GetMapping("/{addressId}")
    public ResponseEntity getAddress(@PathVariable long addressId) {
        System.out.println("ANSWER ID ::::::: " + addressId);
        Address result = addressService.findAddress(addressId);

        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }


    @GetMapping("/all")
    public ResponseEntity getAllAddress() {
        List<Address> result = addressService.findAll();
        Map<String, Object> map = new HashMap<>();
        map.put("result", result);

        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

}
