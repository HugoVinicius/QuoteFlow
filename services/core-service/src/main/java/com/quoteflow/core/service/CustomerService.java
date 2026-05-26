package com.quoteflow.core.service;

import com.quoteflow.core.context.TenantContext;
import com.quoteflow.core.model.Customer;
import com.quoteflow.core.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository repository;

    public List<Customer> getAll() {
        return repository.findAllByTenantId(TenantContext.getCurrentTenant());
    }

    public Customer save(Customer customer) {
        customer.setTenantId(TenantContext.getCurrentTenant());
        return repository.save(customer);
    }

    public void delete(UUID id) {
        repository.deleteById(id);
    }
}
