using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class DatosFindrisc
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellidos { get; set; } = null!;

    public string Genero { get; set; } = null!;

    public int Pregunta1 { get; set; }

    public int Pregunta2 { get; set; }

    public int Pregunta3 { get; set; }

    public int Pregunta4 { get; set; }

    public int Pregunta5 { get; set; }

    public int Pregunta6 { get; set; }

    public int Pregunta7 { get; set; }

    public int Pregunta8 { get; set; }

    public int PuntajeTotal { get; set; }

    public int Riesgo { get; set; }

    public string Interpretacion { get; set; } = null!;
}
