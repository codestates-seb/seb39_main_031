package com.codestates.main31.address;

import lombok.*;

import javax.persistence.*;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="ADDRESS")
public class Address {

    @Id
    @Column(name="address_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long addressId;

    @Column(name="region")
    @Enumerated(EnumType.STRING)
    private Region region;

    @Column(name="town")
    private String town;

}
