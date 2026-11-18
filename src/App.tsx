import { HashRouter, Route, Routes } from 'react-router-dom';
import { StoreProvider, useStore } from './db/store';
import { NoteProvider } from './components/NoteProvider';
import { Layout } from './components/Layout';
import { ToastHost } from './components/ui';
import Dashboard from './pages/Dashboard';
import Roadmap from './pages/Roadmap';
import Lessons from './pages/Lessons';
import LessonDetail from './pages/LessonDetail';
import Units from './pages/Units';
import UnitDetail from './pages/UnitDetail';
import FormulaLibrary from './pages/FormulaLibrary';
import { ReadingDetail, ReadingIndex } from './pages/ReadingGuides';
import Notebook from './pages/Notebook';
import Settings from './pages/Settings';
import SearchPage from './pages/SearchPage';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="card mx-auto max-w-lg p-8 text-center">
      <p className="text-xl font-bold">Không tìm thấy trang</p>
      <Link to="/" className="btn-primary mt-4">Về Tổng quan</Link>
    </div>
  );
}

function Shell() {
  const { ready, error } = useStore();
  return (
    <Layout>
      {error && <p className="card mb-4 border-amber-500 p-4 text-sm">{error} Tiến độ và ghi chú sẽ không được lưu.</p>}
      {!ready ? (
        <p className="p-8 text-center text-muted">Đang tải dữ liệu học tập…</p>
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lo-trinh" element={<Roadmap />} />
          <Route path="/ngu-phap" element={<Lessons />} />
          <Route path="/ngu-phap/:id" element={<LessonDetail />} />
          <Route path="/units" element={<Units />} />
          <Route path="/units/:id" element={<UnitDetail />} />
          <Route path="/cong-thuc" element={<FormulaLibrary />} />
          <Route path="/reading" element={<ReadingIndex />} />
          <Route path="/reading/:id" element={<ReadingDetail />} />
          <Route path="/so-tay" element={<Notebook />} />
          <Route path="/cai-dat" element={<Settings />} />
          <Route path="/tim-kiem" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Layout>
  );
}

export default function App() {
  return (
    <HashRouter>
      <StoreProvider>
        <NoteProvider>
          <Shell />
          <ToastHost />
        </NoteProvider>
      </StoreProvider>
    </HashRouter>
  );
}
