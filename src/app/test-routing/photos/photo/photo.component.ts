import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/shered/dto/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() currentPhoto: IPhoto

  constructor() { }

  ngOnInit(): void {

  }

}
