/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ClarityModule} from "../clarity.module";
import {LoadingButton} from "./loading-button";

describe("Loading Buttons", () => {
    let fixture: ComponentFixture<TestLoadingButtonComponent>;
    let componentInstance: TestLoadingButtonComponent;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                ClarityModule.forRoot()
            ],
            declarations: [
                TestLoadingButtonComponent
            ]
        });

        fixture = TestBed.createComponent(TestLoadingButtonComponent);
        componentInstance = fixture.componentInstance;

        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it("implements LoadingListener", () => {
        let instance: LoadingButton = fixture.componentInstance.loadingButtonInstance;

        instance.startLoading();
        expect(instance.loading).toBe(true);

        instance.doneLoading();
        expect(instance.loading).toBe(false);
    });

    it("displays spinner when [clrLoading] value is true", () => {
        fixture.componentInstance.flag = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector(".spinner")).toBeTruthy();
    });

    it("hides spinner when [clrLoading] value is false", () => {
        fixture.componentInstance.flag = false;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector(".spinner")).toBeFalsy();
    });
});

@Component({
    template: `
        <button [clrLoading]="flag" id="testBtn">Test 1</button>
    `
})
class TestLoadingButtonComponent {
    @ViewChild(LoadingButton) loadingButtonInstance: LoadingButton;

    flag: boolean = false;
}