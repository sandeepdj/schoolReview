import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    
    public Server = 'http://localhost:8080/old/tsr/';
    public ApiUrl = 'angular/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}