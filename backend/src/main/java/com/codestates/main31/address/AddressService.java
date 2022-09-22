package com.codestates.main31.address;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;

    public Address findAddress(Long addressId) {
        Address address = addressRepository.findById(addressId).orElseThrow(() -> new RuntimeException("id 확인필요 [" + addressId +"]"));
        return address;
    }

    public List<Address> findTownListFromRegion(String region) {
        return addressRepository.findByRegion(region);
    }

    public List<Address> findAll() {
        return addressRepository.findAll();
    }


}
