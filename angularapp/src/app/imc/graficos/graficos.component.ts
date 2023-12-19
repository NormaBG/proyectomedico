import { Component, OnInit } from '@angular/core';
import { ObtenerdatosgraficoService } from 'src/app/obtenerdatosgrafico.service';
import * as ApexCharts from 'apexcharts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
  public chartOptions: ApexCharts.ApexOptions | any;
  public series: ApexCharts | any;
  public ids: number[] = [];
  public datos: any[] = [];
  public riesgos: number[] = [];

  constructor(private datosgrafico: ObtenerdatosgraficoService) { }

  ngOnInit(): void {
    this.datosgrafico.obtenerDatos().subscribe(data => {
      // Utiliza el campo 'id' como índice temporal
      this.ids = data.map(item => item.id);
      this.riesgos = data.map(item => item.riesgo);

      // Configura las opciones del gráfico
      this.chartOptions = {
        series: [
          {
            name: "Riesgo",
            data: this.riesgos
          }
        ],
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth"
        },
        title: {
          text: "Riesgo a lo largo del tiempo",
          align: "left"
        },
        subtitle: {
          text: "Análisis de riesgo",
          align: "left"
        },
        xaxis: {
          categories: this.ids
        },
        yaxis: {
          title: {
            text: "Riesgo"
          }
        },
        legend: {
          horizontalAlign: "left"
        }
      };
    });

    this.datosgrafico.datostabla().subscribe(data => {

      this.datos = data;
    });
  }

  exportarExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.datos);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Datos');
    XLSX.writeFile(wb, 'datos.xlsx');
  }
}
