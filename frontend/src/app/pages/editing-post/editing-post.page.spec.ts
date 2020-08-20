import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditingPostPage } from './editing-post.page';

describe('EditingPostPage', () => {
  let component: EditingPostPage;
  let fixture: ComponentFixture<EditingPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditingPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
