// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { AuthService } from "../../services/auth.service";
// import { MainPageComponent } from "./main-page.component";

// import { ApiService } from '../../services/api.service';
// import { UserService } from '../../services/user.service';
// import { EnsoRequestService } from '../../services/enso-request.service';
// import { ModalService } from '../../services/modal.service';

// import {HttpModule} from '@angular/http';

// describe("MainPageComponent", () => {
// 	let comp: MainPageComponent;
// 	let fixture: ComponentFixture<MainPageComponent>;
// 	let authServiceStub: any;
// 	let requestStub: any;
// 	let configStub: any;

// 	beforeEach(() => {
// 		authServiceStub = {};
// 		TestBed.configureTestingModule({
// 			declarations: [MainPageComponent],
// 			schemas: [NO_ERRORS_SCHEMA],
//       		imports: [ HttpModule ],
// 			providers: [
// 				{ provide: AuthService, useValue: authServiceStub },
// 				UserService,HttpModule,ApiService,EnsoRequestService,ModalService
// 				//{ provide: EsirRequestsService, useValue: requestStub },
// //				{ provide: ConfigService, useValue: configStub },
// 			]
// 		});
// 		fixture = TestBed.createComponent(MainPageComponent);
// 		comp = fixture.componentInstance;
// 	});

// 	it("can load instance", () => {
// 		expect(comp).toBeTruthy();
// 	});

// });
