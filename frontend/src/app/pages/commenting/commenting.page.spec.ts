import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommentingPage } from './commenting.page';

describe('CommentingPage', () => {
  let component: CommentingPage;
  let fixture: ComponentFixture<CommentingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
