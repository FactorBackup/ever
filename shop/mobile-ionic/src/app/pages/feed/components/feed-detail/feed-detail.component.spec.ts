import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedDetailComponent } from './feed-detail.component';

describe('FeedDetailComponent', () => {
	let component: FeedDetailComponent;
	let fixture: ComponentFixture<FeedDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FeedDetailComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FeedDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
