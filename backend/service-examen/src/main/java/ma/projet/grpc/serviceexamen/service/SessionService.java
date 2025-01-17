package ma.projet.grpc.serviceexamen.service;

import ma.projet.grpc.serviceexamen.entity.Session;
import ma.projet.grpc.serviceexamen.repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SessionService {
    @Autowired
    private SessionRepository sessionRepository;
    public List<Session> getAllSessions() {
        return sessionRepository.findAll();
    }
    public Session getSessionById(long id) {
        return sessionRepository.findById(id).orElse(null);
    }
    public Session saveSession(Session session) {
        return sessionRepository.save(session);
    }
    public void deleteSessionById(long id) {
        sessionRepository.deleteById(id);
    }
}
