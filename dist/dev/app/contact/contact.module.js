"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var contact_component_1 = require("./contact.component");
var contact_routing_module_1 = require("./contact-routing.module");
var ContactModule = (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, contact_routing_module_1.ContactRoutingModule],
            declarations: [contact_component_1.ContactComponent],
            exports: [contact_component_1.ContactComponent]
        })
    ], ContactModule);
    return ContactModule;
}());
exports.ContactModule = ContactModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250YWN0L2NvbnRhY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQyx5REFBdUQ7QUFDdkQsbUVBQWdFO0FBT2hFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBTHpCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsNkNBQW9CLENBQUM7WUFDN0MsWUFBWSxFQUFFLENBQUMsb0NBQWdCLENBQUM7WUFDaEMsT0FBTyxFQUFFLENBQUMsb0NBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQTlCLEFBQThCLElBQUE7QUFBakIsc0NBQWEiLCJmaWxlIjoiYXBwL2NvbnRhY3QvY29udGFjdC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRhY3RSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jb250YWN0LXJvdXRpbmcubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29udGFjdFJvdXRpbmdNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDb250YWN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvbnRhY3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RNb2R1bGUgeyB9XG4iXX0=
