import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XyzComponent } from './components/xyz/xyz.component';
import { AbcComponent } from './components/abc/abc.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { RouteGuardGuard } from './guardians/route-guard/route-guard.guard';
import { LoginRegisterGuard } from './guardians/loginRegister/login-register.guard';
import { ValidateUsersComponent } from './components/validate-users/validate-users.component';
import { AdminGuardianGuard } from './guardians/admin-guardian/admin-guardian.guard';
import { UsersLessonsComponent } from './components/users-lessons/users-lessons.component';
import { ScoresComponent } from './components/scores/scores.component';
import { GeneralFilesComponent } from './components/general-files/general-files.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ConfigureAccountComponent } from './components/configure-account/configure-account.component';
import { ClassGComponent } from './components/class-g/class-g.component';
import { ProgressGroupComponent } from './components/progress-group/progress-group.component';
import { ProgressStudentComponent } from './components/progress-student/progress-student.component';
import { HomeworksComponent } from './components/homeworks/homeworks.component';
import { HomeworksStudentComponent } from './components/homeworks-student/homeworks-student.component';
import { FeelingStudentsComponent } from './components/feeling-students/feeling-students.component';
import { DoubtsComponent } from './components/Doubts/doubts/doubts.component';

const routes: Routes = [
  { path: 'xyz', component: XyzComponent, },
  { path: 'abc', component: AbcComponent },
  { path: 'Login', component: LoginComponent,canActivate:[LoginRegisterGuard] },
  { path: '', component: LoginComponent  },
  { path: 'Register', component: RegisterComponent,canActivate:[LoginRegisterGuard]  },
  { path: '**', redirectTo: "not_found" },
  { path: 'notFound', redirectTo: "not_found" },
  { path: 'Menu', component: MenuComponent, canActivate:[RouteGuardGuard] },
  { path: 'Chatbot', component: ChatbotComponent, canActivate:[RouteGuardGuard] },
  { path: 'Validate-users', component: ValidateUsersComponent, canActivate:[AdminGuardianGuard] },
  { path: 'Users-lessons', component: UsersLessonsComponent, canActivate:[AdminGuardianGuard] },
  { path: 'Scores', component: ScoresComponent, canActivate:[RouteGuardGuard] },
  { path: 'General-files', component: GeneralFilesComponent, canActivate:[RouteGuardGuard] },
  { path: 'Class-g', component: ClassGComponent, canActivate:[AdminGuardianGuard] },
  { path: 'reminders',component: RemindersComponent, canActivate:[AdminGuardianGuard]  },
  { path: 'Configure-account',component: ConfigureAccountComponent, canActivate:[RouteGuardGuard]  },
  { path: 'Progress-group',component: ProgressGroupComponent, canActivate:[RouteGuardGuard]  },
  { path: 'Progress-student',component: ProgressStudentComponent, canActivate:[RouteGuardGuard]  },
  { path: 'Homeworks',component: HomeworksComponent, canActivate:[RouteGuardGuard]  },
  { path: 'Homeworks-student',component: HomeworksStudentComponent, canActivate:[RouteGuardGuard]  },
  { path: 'Feelings',component: FeelingStudentsComponent, canActivate:[RouteGuardGuard]  },
  { path: 'Doubts',component: DoubtsComponent, canActivate:[RouteGuardGuard]  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
