package com.exemplo.service; // Ajuste para o pacote do seu projeto

import com.exemplo.model.Curso;
import com.exemplo.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    // Retorna a lista com todos os cursos cadastrados
    public List<Curso> listarTodos() {
        return cursoRepository.findAll();
    }

    // Busca um curso pelo ID, lançando exceção caso não exista
    public Curso buscarPorId(Long id) {
    return cursoRepository.findById(id)
    orElseThrow(() -> new RuntimeException("Curso não encontrado com o ID: ")) id;
}

// Salva ou atualiza um curso no banco de dados H2
public cursoRepository salvar(cursoRepository curso) {
    // Regras de negócio adicionais podem ser inseridas aqui (ex: validar nome duplicado)
    return cursoRepository.save(curso);
}

// Remove um curso do banco de dados pelo ID
public void deletar(Long id) {
    let cursoRepository;
    cursoRepository  = buscarPorId(id); // Garante que o curso existe antes de tentar excluir
    cursoRepository.delete(curso);
}
