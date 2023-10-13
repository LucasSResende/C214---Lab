import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class TestePopulaSalaHorario {

    HorarioService service;
    BuscaHorario buscaHorario;

    @Before
    public void setup(){
        service = new MockHorarioService();
        buscaHorario = new BuscaHorario(service);
    }

//Testes de sucesso

    //Caso de Teste - Somente Sala e Horario
    @Test
    public void testeBuscaHorarioC209Sala(){
        Horario c209 = buscaHorario.buscaHorario("C209");

        assertEquals("15:30",c209.getHoraAtend());
        assertEquals("16",c209.getSala());
    }
    //Testes de sucesso

    //Caso de Teste - Somente nome do Professor
    @Test
    public void testeBuscaHorarioNome(){
        Horario c214 = buscaHorario.buscaHorario("C214");

        assertEquals("Christopher",c214.getNomeProf());
    }

    //Caso de Teste - Somente nome da Disciplina
    @Test
    public void testeBuscaHorarioCurso(){
        Horario c214 = buscaHorario.buscaHorario("C214");

        assertEquals("Engenharia de Software", c214.getDisciplina());
    }
    //Caso de Teste - Somente horario
    @Test
    public void testeBuscaHorario(){
        Horario c214 = buscaHorario.buscaHorario("C214");

        assertEquals("17:30",c214.getHoraAtend());
    }
    //Caso de Teste - Somente o periodo
    @Test
    public void testeBuscaHorarioPeriodo(){
        Horario c214 = buscaHorario.buscaHorario("C214");

        assertEquals("Noturno",c214.getPeriodo());
    }
    //Caso de Teste - Somente sala
    @Test
    public void testeBuscaHorarioSala(){
        Horario c214 = buscaHorario.buscaHorario("C214");

        assertEquals("15",c214.getSala());
    }
    //Caso de Teste - Somente predio
    @Test
    public void testeBuscaHorarioPredio(){
        Horario c214 = buscaHorario.buscaHorario("C214");

        assertEquals("2",c214.getPredio());
    }
    //Caso de Teste - Todas as informações
    @Test
    public void testeBuscaHorarioCompleto(){
        Horario c214 = buscaHorario.buscaHorario("C214");

        assertEquals("Christopher",c214.getNomeProf());
        assertEquals("Engenharia de Software", c214.getDisciplina());
        assertEquals("17:30",c214.getHoraAtend());
        assertEquals("Noturno",c214.getPeriodo());
        assertEquals("15",c214.getSala());
        assertEquals("2",c214.getPredio());
    }

//Testes de falha

   //Caso de Teste - Completo
    @Test
    public void testeBuscaHorarioC209(){
        Horario c209 = buscaHorario.buscaHorario("C209");

        assertEquals("Marcelo",c209.getNomeProf());
        assertEquals("Computacao Grafica", c209.getDisciplina());
        assertEquals("15:30",c209.getHoraAtend());
        assertEquals("Integral",c209.getPeriodo());
        assertEquals("16",c209.getSala());
        assertEquals("3",c209.getPredio());
    }

    //Caso de Teste - Horario e dados corretos da disciplina C111
    @Test
    public void testeBuscaHorarioC111(){
        Horario c111 = buscaHorario.buscaHorario("C111");

        assertEquals("Renzo",c111.getNomeProf());
        assertEquals("Analise de Dados", c111.getDisciplina());
        assertEquals("17:30",c111.getHoraAtend());
        assertEquals("Integral",c111.getPeriodo());
        assertEquals("22",c111.getSala());
        assertEquals("5",c111.getPredio());
    }

//Testes de falha

    //Caso de Teste - disciplina invalida
    @Test
    public void testeBuscaDisciplinaInvalida(){
        boolean c100 = buscaHorario.verificaHorarioExistente("C200");

        assertFalse(c100);
    }

    //Caso de Teste - nome da disciplina com a letra minuscula
    @Test
    public void testeBuscaNomeDisciplinaMinuscula(){
        boolean c209 = buscaHorario.verificaHorarioExistente("c209");
        assertFalse(c209);
    }

    //Caso de Teste - professor cadastrado errado no horario(S206)
    @Test
    public void testeNomeProfessorInvalidoS206(){
        Horario s206 = buscaHorario.buscaHorario("S206");
//Esperado era MArcelo
        assertNotEquals("Christopher",s206.getNomeProf());
    }

    //Caso de Teste - professor cadastrado errado no horario(C209)
    @Test
    public void testeNomeProfessorInvalidoC209(){
        Horario c209 = buscaHorario.buscaHorario("C209");
//Esperado era Marcelo
        assertNotEquals("Christopher",c209.getNomeProf());
    }

    //Caso de Teste - Sala errada
    @Test
    public void testeSalaInvalidaC209(){
        Horario c209 = buscaHorario.buscaHorario("C209");
//Esperado era 16
        assertNotEquals("17",c209.getSala());
    }

    //Caso de Teste - Periodo errado
    @Test
    public void testePeriodoInvalidoC209(){
        Horario c209 = buscaHorario.buscaHorario("C209");
//Esperado era Integral
        assertNotEquals("Noturno",c209.getPeriodo());
    }

    //Caso de Teste - Predio errado
    @Test
    public void testePredioInvalidoC209(){
        Horario c209 = buscaHorario.buscaHorario("C209");
//Esperado era 3
        assertNotEquals("1",c209.getPredio());
    }


    //Caso de Teste - HorarioAtendimento errado
    @Test
    public void testeHorarioInvalidaC111(){
        Horario c111 = buscaHorario.buscaHorario("C111");
//Esperado era 17:30
        assertNotEquals("13:20",c111.getHoraAtend());
    }

    //Caso de Teste - Disciplina errada
    @Test
    public void testeDisciplinaInvalidaC111(){
        Horario c111 = buscaHorario.buscaHorario("C111");
//Esperado era Analise de Dados
        assertNotEquals("Fisica",c111.getDisciplina());
    }
    //Caso de Teste - Disciplina errada
    @Test
    public void testeDisciplinaInvalidaC214(){
        Horario c214 = buscaHorario.buscaHorario("C214");
//Esperado era Engenharia de Software
        assertNotEquals("Quimica",c214.getDisciplina());
    }
}