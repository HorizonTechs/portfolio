```mermaid
flowchart TD
    %% Define Styles
    classDef client fill:#f9f,stroke:#333,stroke-width:2px;
    classDef bff fill:#bbf,stroke:#333,stroke-width:2px;
    classDef service fill:#bfb,stroke:#333,stroke-width:2px;
    classDef database fill:#fbb,stroke:#333,stroke-width:2px;

    %% Elements
    User((User/Client)) ::: client
    Gateway[API Gateway / Load Balancer] ::: bff
    
    subgraph K8s [Kubernetes Cluster]
        Auth[Auth Service] ::: service
        Order[Order Service] ::: service
        Inventory[Inventory Service] ::: service
    end

    Cache[(Redis Cache)] ::: database
    DB[(PostgreSQL Primary)] ::: database

    %% Connections
    User -->|HTTPS| Gateway
    Gateway -->|Validate| Auth
    Gateway -->|REST| Order
    Gateway -->|REST| Inventory
    
    Order -->|Read/Write| DB
    Inventory -->|Query| Cache
    Cache -->|Fallback| DB
```
