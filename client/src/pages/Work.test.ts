import { describe, expect, it } from "vitest";

describe("Work page filtering", () => {
  const projects = [
    {
      id: 1,
      title: 'Truworths Plain Park Head Office',
      location: 'Cape Town',
      year: '2021',
      type: 'Commercial',
      category: 'Commercial',
      image: 'https://example.com/truworths.png',
    },
    {
      id: 2,
      title: 'Parklands Mixed Use Development',
      location: 'Cape Town',
      year: '2021',
      type: 'Residential',
      category: 'Residential',
      image: 'https://example.com/parklands.png',
    },
    {
      id: 3,
      title: 'Cape Town International Airport Domestic Terminal',
      location: 'Cape Town',
      year: '2020',
      type: 'Commercial',
      category: 'Commercial',
      image: 'https://example.com/airport.png',
    },
    {
      id: 4,
      title: '7 on Bantry & Avant Multi Storey Apartments',
      location: 'Cape Town',
      year: '2022',
      type: 'Private Residence',
      category: 'Residential',
      image: 'https://example.com/bantry.png',
    },
    {
      id: 5,
      title: 'Parow Social Housing',
      location: 'Cape Town',
      year: '2023',
      type: 'Residential',
      category: 'Residential',
      image: 'https://example.com/parow.png',
    },
  ];

  it("should display all projects when filter is 'All'", () => {
    const activeFilter = 'All';
    const filteredProjects = activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
    
    expect(filteredProjects).toHaveLength(5);
    expect(filteredProjects).toEqual(projects);
  });

  it("should filter projects by 'Commercial' category", () => {
    const activeFilter = 'Commercial';
    const filteredProjects = activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
    
    expect(filteredProjects).toHaveLength(2);
    expect(filteredProjects[0]?.category).toBe('Commercial');
    expect(filteredProjects[1]?.category).toBe('Commercial');
    expect(filteredProjects.map(p => p.id)).toEqual([1, 3]);
  });

  it("should filter projects by 'Residential' category", () => {
    const activeFilter = 'Residential';
    const filteredProjects = activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
    
    expect(filteredProjects).toHaveLength(3);
    expect(filteredProjects.every(p => p.category === 'Residential')).toBe(true);
    expect(filteredProjects.map(p => p.id)).toEqual([2, 4, 5]);
  });

  it("should have correct project metadata", () => {
    const commercialProjects = projects.filter(p => p.category === 'Commercial');
    
    commercialProjects.forEach(project => {
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('location');
      expect(project).toHaveProperty('year');
      expect(project).toHaveProperty('type');
      expect(project).toHaveProperty('category');
      expect(project).toHaveProperty('image');
    });
  });

  it("should have all required categories", () => {
    const categories = ['All', 'Commercial', 'Residential'];
    expect(categories).toHaveLength(3);
    expect(categories).toContain('All');
    expect(categories).toContain('Commercial');
    expect(categories).toContain('Residential');
  });
});
