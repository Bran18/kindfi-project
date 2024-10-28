import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface CTAFormProps {
  onSubmit: (data: { name: string; project: string }) => void;
}

export const CTAForm = ({ onSubmit }: CTAFormProps) => (
  <div className="text-center max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">
    ¿Listo para que la comunidad de KindFi impulse tu proyecto social?
    </h2>
    <p className="text-gray-600 mb-8">
    Conéctate con impulsadores Web3 comprometidos con el impacto social y ambiental
    </p>
    <div className="flex gap-4 mb-4">
      <Input placeholder="Nombre" className="flex-1" />
      <Input placeholder="Proyecto" className="flex-1" />
      <Button className="bg-blue-900 hover:bg-blue-800">Empezar Campaña</Button>
    </div>
    <p className="text-sm text-gray-500">
      En menos de 5 minutos, nuestro equipo estará trabajando en hacerlo realidad
    </p>
  </div>
);
