import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "E-commerce Moda Sustentável",
      category: "websites",
      image: "https://images.pexels.com/photos/5702281/pexels-photo-5702281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Design minimalista para uma marca de moda sustentável, com foco em experiência de compra intuitiva.",
      link: "https://example.com/ecommerce-moda"
    },
    {
      title: "Portal Corporativo Financeiro",
      category: "websites",
      image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Portal institucional para empresa do setor financeiro, com sistema de blog e área do cliente.",
      link: "https://example.com/portal-corporativo"
    },
    {
      title: "Cartão Digital Consultoria",
      category: "cards",
      image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Cartão digital interativo para consultoria empresarial com integração a calendário de agendamentos.",
      link: "https://example.com/cartao-consultoria"
    },
    {
      title: "Landing Page SaaS",
      category: "websites",
      image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Landing page de alto impacto para produto SaaS, com foco em conversão e experiência do usuário.",
      link: "https://example.com/landing-saas"
    },
    {
      title: "Cartão Digital Arquitetura",
      category: "cards",
      image: "https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Cartão digital para estúdio de arquitetura, com portfolio integrado e recursos visuais impactantes.",
      link: "https://example.com/cartao-arquitetura"
    },
    {
      title: "Cartão Digital Manicure",
      category: "cards",
      image: "https://i.ibb.co/cKzPD7yy/Captura-de-tela-2025-05-28-153611.png",
      description: "Cartão digital para manicure e pedicure, com recursos visuais impactantes, tabela de preço, redes sociais e integração com WhatsApp.",
      link: "https://gabrielliima2.github.io/ThatyDiniz/"
    },
    {
      title: "Site Institucional Clínica",
      category: "websites",
      image: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Website completo para clínica médica, com sistema de agendamento online e blog informativo.",
      link: "https://example.com/site-clinica"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nosso Portfólio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            <button 
              onClick={() => setActiveFilter('websites')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'websites' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Websites
            </button>
            <button 
              onClick={() => setActiveFilter('cards')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'cards' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Cartões Digitais
            </button>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <a href={project.link} className="text-white flex items-center font-medium" target="_blank" rel="noopener noreferrer">
                    Ver Projeto <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {project.category === 'websites' ? 'Website' : 'Cartão Digital'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
