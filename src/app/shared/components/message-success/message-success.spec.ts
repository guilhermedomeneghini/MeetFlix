import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSuccess } from './message-success';

describe('MessageSuccess', () => {
  let component: MessageSuccess;
  let fixture: ComponentFixture<MessageSuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageSuccess]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageSuccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
