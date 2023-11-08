using System;
using System.Collections.Generic;

namespace webapi.Models;

public partial class Paciente
{
    public int IdPaciente { get; set; }

    public string Nombre { get; set; } = null!;

    public string Edad { get; set; } = null!;

    public string Genero { get; set; } = null!;

    public string DiabetesGestional { get; set; } = null!;

    public string FamiliarConDiabetes { get; set; } = null!;

    public string PresionAlta { get; set; } = null!;

    public string FisicamenteActivo { get; set; } = null!;

    public double A1c { get; set; }
}
