packagecom.exemplo.repository; // Ajuste para o pacote do seu projeto

import comexemplomodelCurso;
import orgspringframeworkdatajparepositoryJpaRepository;
import orgspringframeworkstereotypeRepository;

@Repository
publicinterfaceCursoRepository  extends JpaRepository<Curso, Long> {
    // Métodos como save(), findAll(), findById() e deleteById() já vêm prontos por herança.
}
