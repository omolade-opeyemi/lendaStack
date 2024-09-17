import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lendaStack';
  search: string = ''
  id:number = 0;
  constructor(private toastr: ToastrService) {}

  list:any[]=[
    {id:0, name:'Opeyemi',colorCode:'#4c46ba'},
    {id:1, name:'Omolade',colorCode:'#87ae22'},
    {id:2, name:'Lendastack',colorCode:'#76c8bc'},
    {id:3, name:'Blessing',colorCode:'#071138'},
    {id:4, name:'Muhammed',colorCode:'#80aef5'},
    {id:5, name:'Haruna',colorCode:'#cf6b69'}
    
  ]

  addTask(item:string){
    let hash = 0;
    item.split('').forEach(char => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      colour += value.toString(16).padStart(2, '0')
    }
    this.list.push({id:this.list.length, name:item, colorCode:colour})
    this.toastr.success('Successful!', 'Item succesfully added');
  }

  getId(id:number){
    this.id = id
  }

  removeTask(){
    this.list = this.list.filter(item => item.id !== this.id)
    this.toastr.error('Delete item','item succesfully deleted')
  }
}
