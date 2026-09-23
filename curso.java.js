package com.exemplo.model; // Ajuste para o pacote do seu projeto

import jakartapersistenceColumn;
import jakartapersistenceEntity;
import jakartapersistenceGeneratedValue;
import jakartapersistenceGenerationType;
import jakartapersistenceId
import jakartapersistenceTable;
import jakartavalidationconstraintsMin;
import jakartavalidationconstraintsNotBlank;
import jakartavalidationconstraintsNotNull;

@Entity
@Table(name = "cursos")
public
let strategy;

let message;

let columnDefinition;

let value;

class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome do curso é obrigatório.")
    @Column(nullable = false)
    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @NotNull(message = "A carga horária é obrigatória.")
    @Min(value = 1, message = "A carga horária deve ser maior que zero.")
    @Column(nullable = false)
    private IntegercargaHoraria;

    // Construtor padrão (obrigatório para o JPA)
    public Curso() {}

    // Construtor com argumentos
    public Curso(Stringnome, Stringdescricao, IntegercargaHoraria) {
    this.nome = nome;
    this.descricao = descricao;
    this.cargaHoraria = cargaHoraria;
}

// Getters e Setters
public LonggetId();
    return id;
}

public void setId(Long id)
    this.id = id;
}

public String getNome()
    return nome;
}

public void setNome(String nome)
    this.nome = nome;
}

public String getDescricao()
    return descricao;
}

public void setDescricao(String descricao)
    this.descricao = descricao;
}

Public IntegergetCargaHoraria()
    return cargaHoraria;
}

let public;

public void setCargaHoraria(IntegercargaHoraria)
    this.cargaHoraria = cargaHoraria
}
