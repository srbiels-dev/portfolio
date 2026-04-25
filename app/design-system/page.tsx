import { Button } from '@/components/ui/Button';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="flex flex-col gap-6">
    <h2 className="font-mono text-sm tracking-widest text-text-tertiary uppercase">{title}</h2>
    {children}
  </section>
);

const Swatch = ({ name, variable }: { name: string; variable: string }) => (
  <div className="flex flex-col gap-2">
    <div
      className="h-12 w-full rounded-lg border border-border-subtle"
      style={{ background: `var(${variable})` }}
    />
    <span className="text-xs text-text-tertiary font-mono">{name}</span>
  </div>
);

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="mx-auto max-w-5xl px-6 py-24 flex flex-col gap-20">

        {/* header */}
        <header className="flex flex-col gap-3">
          <p className="font-mono text-sm tracking-widest text-text-brand uppercase">Design System</p>
          <h1 className="font-display text-5xl tracking-tight">Gabriel Ferraz</h1>
          <p className="text-text-secondary text-lg max-w-xl">
            Token preview — cores, modos e componentes base.
          </p>
        </header>

        {/* buttons */}
        <Section title="Buttons">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="brand">Brand</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary"  size="sm">Primary sm</Button>
            <Button variant="primary"  size="md">Primary md</Button>
            <Button variant="primary"  size="lg">Primary lg</Button>
          </div>
        </Section>

        {/* brand colors */}
        <Section title="Brand Colors">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Swatch name="Black #060609"   variable="--color-brand-black" />
            <Swatch name="Seasalt #FAFAFA" variable="--color-brand-white" />
            <Swatch name="Green #8BD50D"   variable="--color-green-500"  />
            <Swatch name="Cream #EDF0BD"   variable="--color-cream-100"  />
          </div>
        </Section>

        {/* neutral scale */}
        <Section title="Neutral Scale">
          <div className="grid grid-cols-6 gap-2 sm:grid-cols-11">
            {[50,100,200,300,400,500,600,700,800,900,950].map(n => (
              <Swatch key={n} name={String(n)} variable={`--color-neutral-${n}`} />
            ))}
          </div>
        </Section>

        {/* green scale */}
        <Section title="Green Scale">
          <div className="grid grid-cols-6 gap-2 sm:grid-cols-11">
            {[50,100,200,300,400,500,600,700,800,900,950].map(n => (
              <Swatch key={n} name={String(n)} variable={`--color-green-${n}`} />
            ))}
          </div>
        </Section>

        {/* cream scale */}
        <Section title="Cream Scale">
          <div className="grid grid-cols-6 gap-2 sm:grid-cols-11">
            {[50,100,200,300,400,500,600,700,800,900,950].map(n => (
              <Swatch key={n} name={String(n)} variable={`--color-cream-${n}`} />
            ))}
          </div>
        </Section>

        {/* status */}
        <Section title="Status Colors">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* danger */}
            <div
              className="rounded-xl p-4 flex flex-col gap-1 border"
              style={{
                background: 'var(--color-status-danger-bg)',
                borderColor: 'var(--color-status-danger-border)',
              }}
            >
              <span className="text-sm font-semibold" style={{ color: 'var(--color-status-danger-text)' }}>
                Danger
              </span>
              <span className="text-xs" style={{ color: 'var(--color-status-danger-text)' }}>
                Algo deu errado.
              </span>
            </div>
            {/* warning */}
            <div
              className="rounded-xl p-4 flex flex-col gap-1 border"
              style={{
                background: 'var(--color-status-warning-bg)',
                borderColor: 'var(--color-status-warning-border)',
              }}
            >
              <span className="text-sm font-semibold" style={{ color: 'var(--color-status-warning-text)' }}>
                Warning
              </span>
              <span className="text-xs" style={{ color: 'var(--color-status-warning-text)' }}>
                Atenção necessária.
              </span>
            </div>
            {/* success */}
            <div
              className="rounded-xl p-4 flex flex-col gap-1 border"
              style={{
                background: 'var(--color-status-success-bg)',
                borderColor: 'var(--color-status-success-border)',
              }}
            >
              <span className="text-sm font-semibold" style={{ color: 'var(--color-status-success-text)' }}>
                Success
              </span>
              <span className="text-xs" style={{ color: 'var(--color-status-success-text)' }}>
                Operação concluída.
              </span>
            </div>
          </div>
        </Section>

        {/* semantic tokens */}
        <Section title="Semantic Tokens (modo atual)">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Swatch name="bg"              variable="--color-bg"             />
            <Swatch name="bg-subtle"       variable="--color-bg-subtle"      />
            <Swatch name="surface"         variable="--color-surface"        />
            <Swatch name="surface-raised"  variable="--color-surface-raised" />
            <Swatch name="text"            variable="--color-text"           />
            <Swatch name="text-secondary"  variable="--color-text-secondary" />
            <Swatch name="text-tertiary"   variable="--color-text-tertiary"  />
            <Swatch name="text-brand"      variable="--color-text-brand"     />
            <Swatch name="border"          variable="--color-border"         />
            <Swatch name="border-subtle"   variable="--color-border-subtle"  />
            <Swatch name="border-brand"    variable="--color-border-brand"   />
            <Swatch name="bg-brand-subtle" variable="--color-bg-brand-subtle"/>
          </div>
        </Section>

      </div>
    </main>
  );
}
