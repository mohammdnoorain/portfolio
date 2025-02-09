import React from "react";

const DevOpsTool = () => {
  const tools = [
    { title: "CI/CD", items: ["Jenkins", "GitHub Actions"] },
    { title: "Containerization", items: ["Docker"] },
    { title: "Orchestration", items: ["Kubernetes", "Docker Swarm"] },
    { title: "Configuration Management", items: ["Ansible", "Terraform"] },
    { title: "Monitoring & Logging", items: ["Prometheus", "Grafana"] },
    { title: "Cloud Platforms", items: ["AWS", "Azure"] },
    { title: "Scripting", items: ["Python", "Bash", "Groovy", "YAML"] },
  ];

  return (
    <div className="py-6 max-w-[1200px] mx-auto" id="tools">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              <span>DevOps Tools i know</span>
            </h2>
            <p className="text-gray-500">
              These are the tools I work with in the DevOps ecosystem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{tool.title}</h3>
              <ul className="mt-4 space-y-2">
                {tool.items.map((item, idx) => (
                  <li key={idx} className="p-2 bg-gray-700 rounded-lg">
                      <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevOpsTool;
