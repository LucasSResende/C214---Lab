public class Horario {
    private String nomeProf; //nome do professor
    private String horaAtend; //horario de atendimento
    private String periodo; //periodo do atendimento (integral ou noturno)
    private String disciplina; //disciplina do professor
    private String sala; //sala do atendimento
    private String predio; //predio do atendimento


    public Horario(String nomeProf, String horaAtend, String periodo, String disciplina, String sala, String predio) {
        this.nomeProf = nomeProf;
        this.horaAtend = horaAtend;
        this.periodo = periodo;
        this.disciplina = disciplina;
        this.sala = sala;
        this.predio = predio;
    }

    public String getNomeProf() {
        return nomeProf;
    }

    public String getHoraAtend() {
        return horaAtend;
    }

    public String getPeriodo() {
        return periodo;
    }

    public String getDisciplina() {
        return disciplina;
    }

    public String getSala() {
        return sala;
    }

    public String getPredio() {
        return predio;
    }

}
