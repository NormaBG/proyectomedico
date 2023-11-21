using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace webapi.Models;

public partial class SistemamedicoContext : DbContext
{
    public SistemamedicoContext()
    {
    }

    public SistemamedicoContext(DbContextOptions<SistemamedicoContext> options)
        : base(options)
    {
    }

    public virtual DbSet<DatosFindrisc> DatosFindriscs { get; set; }

    public virtual DbSet<Ibm> Ibms { get; set; }

    public virtual DbSet<Paciente> Pacientes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\NMSQL;Database=sistemamedico;Integrated Security=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<DatosFindrisc>(entity =>
        {
            entity.ToTable("datos_findrisc");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Apellidos)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("apellidos");
            entity.Property(e => e.Genero)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("genero");
            entity.Property(e => e.Interpretacion)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("interpretacion");
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Pregunta1).HasColumnName("pregunta1");
            entity.Property(e => e.Pregunta2).HasColumnName("pregunta2");
            entity.Property(e => e.Pregunta3).HasColumnName("pregunta3");
            entity.Property(e => e.Pregunta4).HasColumnName("pregunta4");
            entity.Property(e => e.Pregunta5).HasColumnName("pregunta5");
            entity.Property(e => e.Pregunta6).HasColumnName("pregunta6");
            entity.Property(e => e.Pregunta7).HasColumnName("pregunta7");
            entity.Property(e => e.Pregunta8).HasColumnName("pregunta8");
            entity.Property(e => e.PuntajeTotal).HasColumnName("puntaje_total");
            entity.Property(e => e.Riesgo).HasColumnName("riesgo");
        });

        modelBuilder.Entity<Ibm>(entity =>
        {
            entity.ToTable("ibm");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Estatura).HasColumnName("estatura");
            entity.Property(e => e.Nombre).HasColumnName("nombre");
            entity.Property(e => e.Peso).HasColumnName("peso");
        });

        modelBuilder.Entity<Paciente>(entity =>
        {
            entity.HasKey(e => e.IdPaciente);

            entity.ToTable("paciente");

            entity.Property(e => e.IdPaciente)
                .ValueGeneratedNever()
                .HasColumnName("id_paciente");
            entity.Property(e => e.A1c).HasColumnName("A1C");
            entity.Property(e => e.DiabetesGestional)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("Diabetes Gestional");
            entity.Property(e => e.Edad)
                .HasMaxLength(5)
                .IsUnicode(false);
            entity.Property(e => e.FamiliarConDiabetes)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("familiar con diabetes");
            entity.Property(e => e.FisicamenteActivo)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("fisicamente activo");
            entity.Property(e => e.Genero)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Nombre)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PresionAlta)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("presion alta");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
