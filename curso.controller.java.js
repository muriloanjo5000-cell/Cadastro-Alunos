package com.exemplo.controller; // Ajuste para o pacote do seu projeto

import com.exemplo.model.Curso;
import com.exemplo.service.CursoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/cursos")
public class CursoController {

    @Autowired
    private CursoService cursoService;

    // Listar todos os cursos
    @GetMapping
    public String listarCursos(Model model) {
    model.addAttribute("cursos", cursoService.listarTodos());
    return "cursos/lista"; // Caminho para o template HTML de listagem
}

// Exibir formulário para novo curso
@GetMapping("/novo")
public String exibirFormularioCadastro(Model model) {
    model.addAttribute("curso", new Curso());
    return "cursos/formulario"; // Caminho para o template HTML do formulário
}

// Exibir formulário para edição de um curso existente
@GetMapping("/editar/{id}")
public String exibirFormularioEdicao(@PathVariable Long id, Model model) {
    Curso curso = cursoService.buscarPorId(id);
    model.addAttribute("curso", curso);
    return "cursos/formulario";
}

// Salvar (Cadastrar ou Atualizar)
@PostMapping("/salvar")
public String salvarCurso(@Valid @ModelAttribute("curso") Curso curso, BindingResult result, Model model) {
    if (result.hasErrors()) {
        // Se houver erros de validação (ex: nome vazio ou carga horária <= 0), retorna ao formulário
        return "cursos/formulario";
    }

    cursoService.salvar(curso);
    return "redirect:/cursos";
}

// Excluir um curso
@GetMapping("/deletar/{id}")
public String deletarCurso(@PathVariable Long id) {
    cursoService.deletar(id);
    return "redirect:/cursos";
}
