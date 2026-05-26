package com.quoteflow.auth.service;

import com.quoteflow.auth.dto.AuthenticationRequest;
import com.quoteflow.auth.dto.AuthenticationResponse;
import com.quoteflow.auth.dto.RegisterRequest;
import com.quoteflow.auth.model.Role;
import com.quoteflow.auth.model.Tenant;
import com.quoteflow.auth.model.User;
import com.quoteflow.auth.repository.TenantRepository;
import com.quoteflow.auth.repository.UserRepository;
import com.quoteflow.auth.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final TenantRepository tenantRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Transactional
    public AuthenticationResponse register(RegisterRequest request) {
        // Create Tenant first
        Tenant tenant = Tenant.builder()
                .name(request.getCompanyName())
                .build();
        Tenant savedTenant = tenantRepository.save(tenant);

        // Create User linked to Tenant
        User user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.ADMIN)
                .tenant(savedTenant)
                .build();
        repository.save(user);

        String jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        User user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        String jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
