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
  addTodo(note: string,  deadline: Date | null = null ){
     this.firestoreCollection.add({
      note,
      isDone : false,
      deadline: deadline ? deadline.toISOString() : null
     })
  }

  updateTodoStatus(id:string, newStatus:boolean){
     this.firestoreCollection.doc(id).update({isDone:newStatus})
  }

  updateTodoContent(id:string, content:string){
    this.firestoreCollection.doc(id).update({note:content})
  }

  deleteTodo(id:string){
    this.firestoreCollection.doc(id).delete()
  }
  updateTodoItem(newNote: string, id: string) {
    this.firestoreCollection.doc(id).update({note:newNote})
  }

}
