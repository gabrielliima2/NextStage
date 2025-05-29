import React from 'react';
import { Globe, CreditCard, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: 'Desenvolvimento de Sites',
      description: 'Criamos sites personalizados que representam perfeitamente a identidade da sua marca, com design moderno, responsivo e otimizado para conversões.',
      features: [
        'Design personalizado e responsivo',
        'Otimização para mecanismos de busca (SEO)',
        'Integração com sistemas de gestão',
        'Experiência de usuário intuitiva'
      ]
    },
    {
      icon: <CreditCard className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: 'Cartões Digitais Interativos',
      description: 'Substitua seus cartões de visita tradicionais por uma solução digital moderna que permite compartilhar suas informações de contato instantaneamente.',
      features: [
        'Design elegante e personalizado',
        'Compartilhamento via QR Code ou link',
        'Integração com redes sociais',
        'Análise de visualizações e cliques'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ajudamos sua empresa a se destacar no mundo digital com soluções personalizadas e de alta qualidade.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};