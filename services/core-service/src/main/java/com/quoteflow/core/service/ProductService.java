package com.quoteflow.core.service;

import com.quoteflow.core.context.TenantContext;
import com.quoteflow.core.model.Product;
import com.quoteflow.core.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository repository;

    public List<Product> getAll() {
        return repository.findAllByTenantId(TenantContext.getCurrentTenant());
    }

    public Product save(Product product) {
        product.setTenantId(TenantContext.getCurrentTenant());
        return repository.save(product);
    }
}
