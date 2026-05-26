package com.quoteflow.core.repository;

import com.quoteflow.core.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface CustomerRepository extends JpaRepository<Customer, UUID> {
    List<Customer> findAllByTenantId(UUID tenantId);
}
