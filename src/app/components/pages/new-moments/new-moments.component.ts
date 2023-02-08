import { Component } from '@angular/core';
import { Moment } from 'src/app/Moments';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css'],
})
export class NewMomentsComponent {
  btnText = 'Share';

  constructor(
    private momentService: MomentService,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  async createHandler(moment: Moment) {
    const formData = new FormData();
    formData.append('title', moment.title);
    formData.append('description', moment.description);
    if (moment.image) {
      formData.append('image', moment.image);
    }

    //todo

    //enviar para o service
    await this.momentService.createMoment(formData).subscribe();

    //exibir msg
    this.messagesService.add('successfully created moment!');

    //redirect
    this.router.navigate(['/']);
  }
}
