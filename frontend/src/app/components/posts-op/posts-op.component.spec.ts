import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostsOpComponent } from './posts-op.component';

describe('PostsOpComponent', () => {
  let component: PostsOpComponent;
  let fixture: ComponentFixture<PostsOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsOpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostsOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
