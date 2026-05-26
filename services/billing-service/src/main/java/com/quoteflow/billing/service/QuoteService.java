package com.quoteflow.billing.service;

import com.quoteflow.billing.model.Quote;
import com.quoteflow.billing.model.QuoteStatus;
import com.quoteflow.billing.repository.QuoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class QuoteService {

    private final QuoteRepository repository;

    @Transactional
    public Quote createQuote(Quote quote) {
        quote.setStatus(QuoteStatus.PENDING);
        quote.setPublicToken(UUID.randomUUID().toString());
        // Items logic would go here (calculation etc)
        return repository.save(quote);
    }

    public Quote getByPublicToken(String token) {
        return repository.findByPublicToken(token)
                .orElseThrow(() -> new RuntimeException("Quote not found"));
    }
}
---
package com.quoteflow.billing.repository;

import com.quoteflow.billing.model.Quote;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.UUID;

public interface QuoteRepository extends JpaRepository<Quote, UUID> {
    Optional<Quote> findByPublicToken(String token);
}
