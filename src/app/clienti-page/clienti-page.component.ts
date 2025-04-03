import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule, MatPaginator } from "@angular/material/paginator";
import { MatSortModule, MatSort } from "@angular/material/sort";
import { MatTableModule, MatTableDataSource } from "@angular/material/table";
import { liveQuery } from "dexie";
import { db } from "../db";

interface ClienteRow {
  id: number;
  nome: string;
  timbri: number;
}

@Component({
  selector: 'app-clienti-page',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './clienti-page.component.html',
  styleUrl: './clienti-page.component.scss'
})
export class ClientiPageComponent implements OnInit, AfterViewInit {
  displayedColumns = ['nome', 'timbri', 'actions'];
  dataSource = new MatTableDataSource<ClienteRow>();

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngOnInit(): void {
    liveQuery(() => db.clienteList.toArray())
      .subscribe(clienteList =>
        this.dataSource.data = clienteList.map(c => ({ id: c.id!, nome: `${c.nome} ${c.cognome}`, timbri: c.timbri }))
      );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.dataSource.paginator?.firstPage();
  }
}
