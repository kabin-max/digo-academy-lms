import { AuthBackButton } from '@/features/auth/components/AuthBackButton';
import { RegisterForm } from '@/features/auth/components/RegisterForm';
import { Panel } from '@/shared/components/dashboard/Panel';

export default function RegisterPage() {
  return (
    <Panel className="p-8 shadow-lg">
      <div className="mb-6">
        <AuthBackButton className="-ml-1 mb-4" />
        <h1 className="font-heading text-2xl font-semibold tracking-tight">Create your account</h1>
        <p className="text-sm text-muted-foreground">Start learning with Digo Academy.</p>
      </div>
      <RegisterForm />
    </Panel>
  );
}
