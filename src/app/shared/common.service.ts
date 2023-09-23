import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnInit {
  firestoreCollection: AngularFirestoreCollection;


  constructor(private firestore: AngularFirestore) {
    this.firestoreCollection = firestore.collection('todos')

  }
  ngOnInit(): void {

  }
  addTodo(note: string){
     this.firestoreCollection.add({
      note,
      isDone : false
     })
  }

  updateTodoStatus(id:string, newStatus:boolean){
     this.firestoreCollection.doc(id).update({isDone:newStatus})
  }

  deleteTodo(id:string){
    this.firestoreCollection.doc(id).delete()
  }


}
