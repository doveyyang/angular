import { Component } from '@angular/core';

// 定义接口
interface Person {
  name: string;
  id: number;
}

const arr: Person[] = [
  { name: 'a', id : 1},
  { name: 'b', id : 1},
  { name: 'c', id : 1},
  { name: 'd', id : 1},
  { name: 'e', id : 1}
];

@Component({  // @Component来描述当前组件中的元数据
  selector: 'app-root', // 组件的名称
  // templateUrl: './app.component.html', // html
  template: `<h1 title='{{title}}'>{{title}}</h1><h2 [title]="obj.name">{{obj.name}}</h2><h2>{{obj.id}}</h2>
    <ul>
      <li *ngFor="let list of lists" (click)="listChange(list.name)">{{list.name}}</li>
    </ul>
  `,
  // styleUrls: ['./app.component.css'] // css
  styles: [ `h2{
    color:blue
  }`]
})
export class AppComponent {
  title = 'my-app';
  // obj = {a: 'a', b: 'b'};
  obj: Person = {
    name: 'dovey',
    id: 12
  };
  lists = arr;

  // 点击事件
  listChange(name: string): void {
    this.title = name;
  }
}
