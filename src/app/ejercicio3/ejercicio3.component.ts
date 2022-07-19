import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit {
  heroes: any[] = []
  offset = 0
  hero: any = { edit: false }
  filtroBuscar: string = ""
  constructor(private requestServe: RequestService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getInfo()
  }

  async getInfo() {
    const response = await this.requestServe.getInfo(this.offset) as any[];
    if (response[0]) {
      this.heroes = [...this.heroes, ...response[1].results]
    }
  }
  onScroll() {
    this.offset += 20
    this.getInfo()
  }

  open(content: any, heroIndex: any = null) {
    if (heroIndex) {
      const heroTmp = Object.assign({}, this.heroes[heroIndex])
      this.hero = heroTmp
      this.hero.index = heroIndex
      this.hero.edit = true
    } else {
      this.hero = {}
      this.hero.edit = false
      this.hero.name = ""
      this.hero.description = ""
      this.hero.thumbnail = {
        path: ""
      }
      this.hero.imgEdit = true

    }

    const modal = this.modalService.open(content, { size: "md" });

  }
  cambiarImagen(event: any) {
    console.log(event.target)
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => {
        this.hero.imgEdit = true
        this.hero.thumbnail.path = event.target.result;
      }
    }


    this.hero.imgEdit = true


  }
  guardar() {
    this.hero.modified = moment()
    if (this.hero.edit) {
      this.heroes[this.hero.index] = this.hero
    } else {
      this.heroes.unshift(this.hero)
    }
    this.modalService.dismissAll()

  }
  async buscar() {
    const response = await this.requestServe.getInfoByName(this.filtroBuscar) as any
    if (response[0]) {
      this.heroes = response[1].results
    }
  }
}


