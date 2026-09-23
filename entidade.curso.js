import 'jakartapersistence';

@Entity
@Table name = "cursos"

Public: let strategy;

let columnDefinition;

let strategy;

class curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Longid;

    @Column(nullable = false)
    private string:nome;

    @Column(columnDefinition = "TEXT")
    private String:descricao;

    @Column(nullable = false)
    private Integer:cargaHoraria;

    // Construtores
    public curso () {}

    public Curso (String:nome,String:descricao, Integer:cargaHoraria) {
    this.nome = nome;
    this.descricao = descricao;
    this.cargaHoraria = cargaHoraria;
}

// Getters e Setters
public LonggetId() {
    return id;
}

public voidsetId(Longid);
    thisid = id;
}

Public: String: getNome ()
     return nome
}
