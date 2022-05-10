import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {
  requests = [
    {
      title: 't1',
      description: 'desc1',
      status: 'NEW',
      type: 'COMPLAIN',
    },
    {
      title: 't2',
      description: 'desc1',
      status: 'NEW',
      type: 'COMPLAIN',
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
