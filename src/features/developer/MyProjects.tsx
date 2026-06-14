// src/features/developer/MyProjects.tsx
import { Link } from 'react-router-dom'; // 1. Import thêm thẻ Link ở đây
import { Button } from '../../components/ui/Button';
import { EnvironmentCard } from '../../components/shared/EnvironmentCard';

const mockProjectGroups = [
  {
    id: 'p1',
    name: 'Project A',
    environments: [
      { id: 'e1', branch: 'staging', domain: 'project-a-stag.paas.com', status: 'Building', time: '27/05/2026' },
      { id: 'e2', branch: 'dev', domain: 'project-a-dev.paas.com', status: 'Crashed', time: '25/05/2026' },
      { id: 'e3', branch: 'main', domain: 'project-a.paas.com', status: 'Running', time: '20/05/2026' }
    ]
  },
  {
    id: 'p2',
    name: 'Project B',
    environments: [
      { id: 'e4', branch: 'staging', domain: 'project-b-stag.paas.com', status: 'Running', time: '27/05/2026' },
      { id: 'e5', branch: 'dev', domain: 'project-b-dev.paas.com', status: 'Crashed', time: '25/05/2026' },
      { id: 'e6', branch: 'main', domain: 'project-b.paas.com', status: 'Running', time: '20/05/2026' },
      { id: 'e7', branch: 'feature/api', domain: 'project-b-api.paas.com', status: 'Building', time: '24/05/2026' },
      { id: 'e8', branch: 'feature/worker', domain: 'project-b-worker.paas.com', status: 'Stopped', time: '22/05/2026' }
    ]
  }
];

export const MyProjects = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Good Morning, Phuong 👋</h2>
          <p className="text-gray-500 mt-1">This is your projects</p>
        </div>
        <Button variant="primary">
          + Create New Projects
        </Button>
      </div>

      {/* Danh sách các nhóm dự án */}
      <div className="space-y-12">
        {mockProjectGroups.map((project) => (
          <div key={project.id} className="w-full overflow-hidden">
            
            {/* Thanh tiêu đề của từng Project */}
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
              <div className="flex-1 border-t border-gray-300"></div>
              <Button variant="text" size="sm" className="font-semibold tracking-wide">
                [ EDIT ]
              </Button>
            </div>

            {/* Container Cuộn Ngang */}
            <div className="flex flex-nowrap gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
              {project.environments.map((env) => (
                /* 2. Thay thế thẻ div cũ bằng thẻ Link, truyền path động khớp với cấu hình Route */
                <Link 
                  key={env.id} 
                  to={`/project/${project.id}/env/${env.id}`}
                  className="w-[320px] min-w-[320px] shrink-0 snap-start block no-underline death-link"
                >
                  <EnvironmentCard
                    status={env.status as any}
                    domain={env.domain}
                    branch={env.branch}
                    time={env.time}
                  />
                </Link>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};