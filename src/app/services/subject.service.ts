import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, Subscriber, throwError } from "rxjs";
import { Grades } from "../models/grades";
import { environment as env } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class SubjectService {
  public id: number;
  constructor(private http: HttpClient, private router: Router) {}

  fetchSubjects(id: number): Observable<any> {
    return Observable.create((obs: Subscriber<any>) => {
      this.http
        .get<Grades[]>(`${env.url}/grades?studentId=${id}`)
        .subscribe(res => {
          if (res && res.length > 0) {
            console.log("Potvrdjujem");
            obs.next(res[0]);
            obs.complete();
          } else {
            console.log("Javljam gresku");
            throwError("There isn't in the base table with grades.");
            obs.next("There isn't in the base table with grades.");
            obs.complete();
          }
        });
    });
  }

  changeGrade(grades: Partial<Grades>): Observable<any> {
    return this.http.patch<Grades>(`${env.url}/grades/${grades.id}`, grades);
  }
  deleteGrade(studId: number): Observable<any> {
    return Observable.create((obs: Subscriber<any>) => {
      this.http
        .get<Grades[]>(`${env.url}/grades?studentId=${studId}`)
        .subscribe(res => {
          if (res && res.length > 0) {
            console.log("Potvrdjujem " + res[0].id);
            this.http
              .delete<void>(`${env.url}/grades/${res[0].id}`)
              .subscribe(() => console.log("Zavrsio sam brisanje"));
            this.id = res[0].id;
            // obs.next(res[0].id);
            obs.complete();
          } else {
            console.log("Javljam gresku");
            throwError("Grade error.");
            obs.next("Grade error.");
            obs.complete();
          }
        });
    });
  }
}
