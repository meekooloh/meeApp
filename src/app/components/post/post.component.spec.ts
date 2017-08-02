import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PostComponent } from './post.component';
import { Post } from './../../models/post';
import {  TranslatePipe }   from './../../translate/translate.pipe';
import { TRANSLATION_PROVIDERS } from './../../translate/translation';
import { TranslateService } from './../../translate/translate.service';
describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let mockPost: Post;
  mockPost={
    id: "1",
    title: "post test",
    info: "This is the post test infoooo",
    metadata: "https://youtu.be/ILdTxKOEbsw",
    userid: "user1",
    date: "1501699582462",
    category: "cat1",
    subcategory1: "cat2",
    subcategory2: "cat3"
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ PostComponent ],
      providers: [
        TRANSLATION_PROVIDERS,TranslateService,
      ],  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should be created', () => {
    component.post=mockPost;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });  
});
