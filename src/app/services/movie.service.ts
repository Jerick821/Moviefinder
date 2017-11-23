import {Injectable} from '@angular/core'; //connect to API
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable() //injectable decorator
export class MovieService{ //creating the class
    apikey:string; //api key, added as property
    constructor(private _jsonp:Jsonp){ 
        this.apikey = '68fa48e2ee3ab526ebe5261736bc8147';
        console.log('MovieService Initialized...') //notify that the service is initialised
        // ==> app.module.ts to bring HTTP module
    }

    getPopular(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey) // since using Jsonp, have to use call back 
            .map(res => res.json());
    }

    getInTheatres(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-07-13&primary_release_date.lte=2017-09-13&api_key='+this.apikey) // since using Jsonp, have to use call back 
            .map(res => res.json());
    }

    searchMovies(searchStr: string){
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey) // since using Jsonp, have to use call back 
            .map(res => res.json());
    }

    getMovie(id:string){
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey) // since using Jsonp, have to use call back 
            .map(res => res.json());
    }
}



