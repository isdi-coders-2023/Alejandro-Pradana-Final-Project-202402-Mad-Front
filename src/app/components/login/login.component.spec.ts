import { ComponentFixture, TestBed } from '@angular/core/testing';

import LoginComponent from './login.component';
import { of, throwError } from 'rxjs';
import { StateService } from '../../services/state.service';
import { UsersRepoService } from '../../services/users.repo.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: StateService;
  let repoService: UsersRepoService;
  let router: Router;

  const mockStateService = jasmine.createSpyObj('StateService', {
    getState: of({ loginState: 'logged' }),
    setLoginState: undefined,
    setLogin: undefined,
  });

  const mockRepoService = jasmine.createSpyObj('RepoUsersService', {
    login: of({ token: 'token' }),
  });

  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: StateService, useValue: mockStateService },
        {
          provide: UsersRepoService,
          useValue: mockRepoService,
        },
        { provide: Router, useValue:mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(StateService);
    repoService = TestBed.inject(UsersRepoService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login service with an email', () => {
    const fakeEmail = 'fake@example.com';
    const fakePassword = 'fakePassword';

    (repoService.login as jasmine.Spy).and.returnValue(of({ token: 'token' }));
    component.loginForm.setValue({ email: fakeEmail, password: fakePassword });
    component.onSubmit();
    expect(repoService.login).toHaveBeenCalled();
    expect(service.setLogin).toHaveBeenCalled();
  });

  it('should set login state to error', () => {
    (repoService.login as jasmine.Spy).and.returnValue(
      throwError(() => 'error'),
    );
    component.onSubmit();
    expect(service.setLoginState).toHaveBeenCalledWith('error');
  });

  it('should navigate to register on click', () => {
    component.onClickRegister();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });
});
