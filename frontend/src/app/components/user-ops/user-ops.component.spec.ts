import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserOpsComponent } from './user-ops.component';

describe('UserOpsComponent', () => {
  let component: UserOpsComponent;
  let fixture: ComponentFixture<UserOpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOpsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
